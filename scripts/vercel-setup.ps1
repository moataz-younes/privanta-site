# Automates Vercel project settings + env sync + redeploy.
# Usage:
#   $env:VERCEL_TOKEN = "your_token"
#   .\scripts\vercel-setup.ps1

$ErrorActionPreference = "Stop"
Set-Location (Split-Path $PSScriptRoot -Parent)

if (-not $env:VERCEL_TOKEN) {
    Write-Host @"

VERCEL_TOKEN is required.

1. https://vercel.com/account/tokens → Create Token
2. Then run:

   `$env:VERCEL_TOKEN = "YOUR_TOKEN"
   `$env:VERCEL_PROJECT = "privanta-site"
   npm run vercel:setup

"@ -ForegroundColor Yellow
    exit 1
}

if (-not $env:VERCEL_PROJECT) {
    $env:VERCEL_PROJECT = "privanta-site"
}

npm run vercel:setup
