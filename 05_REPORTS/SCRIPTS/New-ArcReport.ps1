param(
    [Parameter(Mandatory = $true)]
    [string]$Client,

    [Parameter(Mandatory = $true)]
    [string]$ReportName
)

$ErrorActionPreference = "Stop"

$ArcRoot = "C:\ARC"
$Date = Get-Date -Format "yyyy-MM-dd"
$SafeClient = $Client -replace '[^a-zA-Z0-9_-]', '-'
$SafeReport = $ReportName -replace '[^a-zA-Z0-9_-]', '-'
$ReportId = "ARC-$Date-$SafeClient-$SafeReport"

$ClientRoot = Join-Path $ArcRoot "04_CLIENTS\ACTIVE\$SafeClient"
$ReportFolder = Join-Path $ArcRoot "05_REPORTS\03_DRAFTS\$ReportId"
$Template = Join-Path $ArcRoot "05_REPORTS\TEMPLATES\ARC_REPORT_TEMPLATE.md"
$ReportFile = Join-Path $ReportFolder "$ReportId.md"

$ClientFolders = @(
    $ClientRoot,
    "$ClientRoot\BRIEFS",
    "$ClientRoot\RESEARCH",
    "$ClientRoot\EVIDENCE",
    "$ClientRoot\REPORTS",
    "$ClientRoot\CORRESPONDENCE"
)

foreach ($Folder in $ClientFolders) {
    New-Item -ItemType Directory -Force $Folder | Out-Null
}

New-Item -ItemType Directory -Force $ReportFolder | Out-Null
Copy-Item $Template $ReportFile -Force

$Content = Get-Content $ReportFile -Raw
$Content = $Content.Replace("Report ID:", "Report ID: $ReportId")
$Content = $Content.Replace("Client:", "Client: $Client")
$Content = $Content.Replace("Date:", "Date: $Date")

Set-Content $ReportFile $Content -Encoding UTF8

Write-Host ""
Write-Host "Report created:"
Write-Host $ReportFile

code -r $ReportFile
