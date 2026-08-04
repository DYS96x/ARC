param(
    [switch]$OpenSite
)

$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $PSScriptRoot
$ArcRoot = Split-Path -Parent $ProjectRoot
$PublicRoot = Join-Path $ArcRoot "00_PUBLIC"
$ContentRoot = Join-Path $ProjectRoot "content"

if (-not (Test-Path $PublicRoot)) {
    throw "Approved public directory not found: $PublicRoot"
}

$CopyMap = @{
    "$PublicRoot\FOUNDATION\ARC_CONSTITUTION.md" =
        "$ContentRoot\foundation\arc-constitution.md"

    "$PublicRoot\FOUNDATION\ARC_MANIFESTO.md" =
        "$ContentRoot\foundation\arc-manifesto.md"

    "$PublicRoot\FOUNDATION\ARC_PRINCIPLES.md" =
        "$ContentRoot\foundation\arc-principles.md"

    "$PublicRoot\FOUNDATION\MISSION.md" =
        "$ContentRoot\foundation\mission.md"

    "$PublicRoot\FOUNDATION\VISION.md" =
        "$ContentRoot\foundation\vision.md"

    "$PublicRoot\FOUNDATION\ARC_LEXICON.md" =
        "$ContentRoot\foundation\arc-lexicon.md"

    "$PublicRoot\STUDIO\STUDIO_OPERATING_SYSTEM.md" =
        "$ContentRoot\studio\studio-operating-system.md"

    "$PublicRoot\BUSINESS\BUSINESS_MODEL.md" =
        "$ContentRoot\business\business-model.md"

    "$PublicRoot\SERVICES\SERVICES.md" =
        "$ContentRoot\services\services.md"

    "$PublicRoot\SERVICES\CLIENT_JOURNEY.md" =
        "$ContentRoot\services\client-journey.md"

    "$PublicRoot\METHODOLOGY\ARC_METHODOLOGY.md" =
        "$ContentRoot\methodology\arc-methodology.md"

    "$PublicRoot\PLATFORMS\PLATFORM_STRATEGY.md" =
        "$ContentRoot\platforms\platform-strategy.md"

    "$PublicRoot\PLATFORMS\ARC_CORE_FRAMEWORK.md" =
        "$ContentRoot\platforms\arc-core-framework.md"

    "$PublicRoot\PLATFORMS\IDENTITY_ENGINE.md" =
        "$ContentRoot\platforms\identity-engine.md"

    "$PublicRoot\PLATFORMS\KNOWLEDGE_ENGINE.md" =
        "$ContentRoot\platforms\knowledge-engine.md"

    "$PublicRoot\PLATFORMS\WORKFLOW_ENGINE.md" =
        "$ContentRoot\platforms\workflow-engine.md"

    "$PublicRoot\PLATFORMS\INTELLIGENCE_ENGINE.md" =
        "$ContentRoot\platforms\intelligence-engine.md"

    "$PublicRoot\PLATFORMS\ANALYTICS_ENGINE.md" =
        "$ContentRoot\platforms\analytics-engine.md"

    "$PublicRoot\ARCHITECTURE\ARC_ARCHITECTURE_BLUEPRINT.md" =
        "$ContentRoot\architecture\arc-architecture-blueprint.md"

    "$PublicRoot\ARCHITECTURE\ARC_ENGINE_CONTRACTS.md" =
        "$ContentRoot\architecture\arc-engine-contracts.md"

    "$PublicRoot\KNOWLEDGE\ARC_KNOWLEDGE_GRAPH.md" =
        "$ContentRoot\knowledge\arc-knowledge-graph.md"
}

foreach ($Source in $CopyMap.Keys) {
    $Destination = $CopyMap[$Source]
    $DestinationFolder = Split-Path -Parent $Destination

    New-Item `
        -ItemType Directory `
        -Force `
        -Path $DestinationFolder |
        Out-Null

    if (-not (Test-Path $Source)) {
        throw "Approved public source is missing: $Source"
    }

    Copy-Item $Source $Destination -Force
    Write-Host "Published: $Source"
}

Write-Host ""
Write-Host "Public ARC documentation synchronized successfully."
Write-Host "Source boundary: $PublicRoot"

if ($OpenSite) {
    Set-Location $ProjectRoot
    npm run dev
}
