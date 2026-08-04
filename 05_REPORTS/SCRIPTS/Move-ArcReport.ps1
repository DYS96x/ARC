param(
    [Parameter(Mandatory = $true)]
    [string]$ReportId,

    [Parameter(Mandatory = $true)]
    [ValidateSet(
        "Draft",
        "Review",
        "Approved",
        "Export",
        "Sent",
        "Archive"
    )]
    [string]$Status
)

$ErrorActionPreference = "Stop"

$ArcRoot = "C:\ARC"

$StatusFolders = @{
    Draft    = "05_REPORTS\03_DRAFTS"
    Review   = "05_REPORTS\04_REVIEW"
    Approved = "05_REPORTS\05_APPROVED"
    Export   = "05_REPORTS\06_EXPORTS"
    Sent     = "05_REPORTS\07_SENT"
    Archive  = "05_REPORTS\08_ARCHIVE"
}

$CurrentFolder = $null

foreach ($Folder in $StatusFolders.Values) {
    $Candidate = Join-Path $ArcRoot "$Folder\$ReportId"

    if (Test-Path $Candidate) {
        $CurrentFolder = $Candidate
        break
    }
}

if (-not $CurrentFolder) {
    throw "Report not found: $ReportId"
}

$DestinationRoot = Join-Path $ArcRoot $StatusFolders[$Status]
$DestinationFolder = Join-Path $DestinationRoot $ReportId

New-Item -ItemType Directory -Force $DestinationRoot | Out-Null

if ($CurrentFolder -ne $DestinationFolder) {
    if (Test-Path $DestinationFolder) {
        throw "Destination already exists: $DestinationFolder"
    }

    Move-Item $CurrentFolder $DestinationFolder
}

$ReportFile = Get-ChildItem `
    -Path $DestinationFolder `
    -Filter "*.md" `
    -File |
    Select-Object -First 1

if (-not $ReportFile) {
    throw "Markdown report file not found in: $DestinationFolder"
}

$Content = Get-Content $ReportFile.FullName -Raw

$Content = [regex]::Replace(
    $Content,
    '(?m)^Status:\s*.*$',
    "Status: $Status"
)

Set-Content $ReportFile.FullName $Content -Encoding UTF8

Write-Host ""
Write-Host "Report moved successfully."
Write-Host "Report ID: $ReportId"
Write-Host "Status: $Status"
Write-Host "Location: $DestinationFolder"

code -r $ReportFile.FullName
