# Simple deployment script for RLTC single-page website
# This script creates a clean build folder with just the essential files

Write-Host "Creating simple deployment build..." -ForegroundColor Green

# Create build directory
$buildDir = ".\build"
if (Test-Path $buildDir) {
    Remove-Item -Path $buildDir -Recurse -Force
}
New-Item -ItemType Directory -Path $buildDir -Force | Out-Null

# Copy single page
Write-Host "Copying single-page website..." -ForegroundColor Yellow
Copy-Item "index.html" -Destination "$buildDir\"

# Copy assets (only images now)
Write-Host "Copying image assets..." -ForegroundColor Yellow
Copy-Item "assets\img" -Destination "$buildDir\assets\" -Recurse

Write-Host "Build complete! Single-page website is in the 'build' folder." -ForegroundColor Green
Write-Host "You can upload the contents of the build folder to any web server." -ForegroundColor Cyan
Write-Host "Total file count: $(Get-ChildItem -Path $buildDir -Recurse | Measure-Object).Count" -ForegroundColor Blue
