Write-Host "Starter full reset av database..."

# -----------------------------
# WAIT FOR DATABASE
# -----------------------------
Write-Host "Venter pa database..."

$maxRetries = 10
$retry = 0
$connected = $false

while (-not $connected -and $retry -lt $maxRetries) {
    try {
        dotnet ef database drop --context UsersDbContext --force | Out-Null
        $connected = $true
        Write-Host "DB er tilgjengelig"
    } catch {
        Write-Host "DB ikke klar, prover igjen..."
        Start-Sleep -Seconds 2
        $retry++
    }
}

if (-not $connected) {
    Write-Host "Klarte ikke koble til DB"
    exit 1
}

# -----------------------------
# SLETT MIGRATIONS
# -----------------------------
$migrationPath = ".\Contexts\Users\Migrations"

if (Test-Path $migrationPath) {
    Write-Host "Sletter migrations mappe..."
    Remove-Item -Recurse -Force $migrationPath
}

# -----------------------------
# NY MIGRATION
# -----------------------------
Write-Host "Lager ny migration..."
dotnet ef migrations add InitialUsers --context UsersDbContext --output-dir Contexts/Users/Migrations

# -----------------------------
# UPDATE DATABASE
# -----------------------------
Write-Host "Oppretter database..."
dotnet ef database update --context UsersDbContext

# -----------------------------
# START BACKEND
# -----------------------------
Write-Host "Starter backend..."
dotnet run

Write-Host "Ferdig!"