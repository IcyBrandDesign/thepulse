-- =========================================================
-- Setup Database for IP Logging
-- =========================================================

-- For å opprette databasen kjøres denne linjen i shell:
-- psql -h localhost -U postgres -d thepulsedbTEST -f setup_database.sql


-- Opprett tabell for IP-logg
CREATE TABLE IF NOT EXISTS ip_logs (
    id serial PRIMARY KEY,                  -- Automatisk økende ID
    ip_address inet NOT NULL,               -- IP-adresse (IPv4/IPv6)
    user_agent text,                        -- Valgfritt: nettleser eller klientinfo
    visited_at timestamptz NOT NULL DEFAULT NOW()  -- Tidspunkt, fylles automatisk
);

-- Eventuelt: legg til indeks på ip_address for raskere søk
CREATE INDEX IF NOT EXISTS idx_ip_logs_ip ON ip_logs(ip_address);

-- Eventuelt: legg til indeks på visited_at for raskere tidsbaserte spørringer
CREATE INDEX IF NOT EXISTS idx_ip_logs_visited_at ON ip_logs(visited_at);
