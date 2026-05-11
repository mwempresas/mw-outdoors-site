// MW Outdoors - Inventário de painéis
// Atualizado em maio/2026
// 11 pontos comerciais: 9 outdoors + 1 LED Digital + 1 Backlight
// Status: "Disponível" ou "Ocupado"

const PAINEIS = [
  // ============================================================
  // PEDRO LEOPOLDO
  // ============================================================
  {
    id: "PL-OUT-001",
    nome: "Pedro Leopoldo - Rodovia MG-424, KM 22 (Vargem Alegre)",
    tipo: "Outdoor",
    cidade: "Pedro Leopoldo",
    bairro: "Vargem Alegre",
    sentido: "PL → MTZ",
    dimensoes: "10,00 × 4,00 m",
    area: "40 m²",
    fluxo: "Muito Alto",
    status: "Disponível",
    lat: -19.597605,
    lng: -44.049367
  },
  {
    id: "PL-OUT-002",
    nome: "Pedro Leopoldo - Rodovia MG-424, KM 22 (Vargem Alegre)",
    tipo: "Outdoor",
    cidade: "Pedro Leopoldo",
    bairro: "Vargem Alegre",
    sentido: "MTZ → PL",
    dimensoes: "10,00 × 4,00 m",
    area: "40 m²",
    fluxo: "Muito Alto",
    status: "Ocupado",
    lat: -19.597605,
    lng: -44.049367
  },
  {
    id: "PL-LED-001",
    nome: "Pedro Leopoldo - Totem LED Digital (Parque Andiara)",
    tipo: "LED",
    cidade: "Pedro Leopoldo",
    bairro: "Parque Andiara",
    sentido: "Centro → PLRS",
    dimensoes: "2,00 × 2,00 m",
    area: "4 m²",
    fluxo: "Muito Alto",
    status: "Disponível",
    lat: -19.600677,
    lng: -44.028666
  },
  {
    id: "PL-LED-001-BL",
    nome: "Pedro Leopoldo - Backlight (Parque Andiara)",
    tipo: "Backlight",
    cidade: "Pedro Leopoldo",
    bairro: "Parque Andiara",
    sentido: "Centro → PLRS",
    dimensoes: "2,00 × 2,00 m",
    area: "4 m²",
    fluxo: "Muito Alto",
    status: "Disponível",
    lat: -19.600677,
    lng: -44.028666
  },

  // ============================================================
  // MATOZINHOS
  // ============================================================
  {
    id: "MTZ-OUT-001",
    nome: "Matozinhos - Rodovia MG-424, KM 25 (Bom Jesus)",
    tipo: "Outdoor",
    cidade: "Matozinhos",
    bairro: "Bom Jesus",
    sentido: "PL → MTZ",
    dimensoes: "10,00 × 4,00 m",
    area: "40 m²",
    fluxo: "Muito Alto",
    status: "Disponível",
    lat: -19.576964,
    lng: -44.059313
  },
  {
    id: "MTZ-OUT-002",
    nome: "Matozinhos - Rodovia MG-424, KM 25 (Bom Jesus)",
    tipo: "Outdoor",
    cidade: "Matozinhos",
    bairro: "Bom Jesus",
    sentido: "MTZ → PL",
    dimensoes: "10,00 × 4,00 m",
    area: "40 m²",
    fluxo: "Muito Alto",
    status: "Disponível",
    lat: -19.576964,
    lng: -44.059313
  },
  {
    id: "MTZ-OUT-003",
    nome: "Matozinhos - Rodovia MG-424, KM 23 (São Sebastião)",
    tipo: "Outdoor",
    cidade: "Matozinhos",
    bairro: "São Sebastião",
    sentido: "PL → MTZ",
    dimensoes: "10,00 × 4,00 m",
    area: "40 m²",
    fluxo: "Muito Alto",
    status: "Disponível",
    lat: -19.575267,
    lng: -44.063266
  },
  {
    id: "MTZ-OUT-004",
    nome: "Matozinhos - Rodovia MG-424, KM 23 (São Sebastião)",
    tipo: "Outdoor",
    cidade: "Matozinhos",
    bairro: "São Sebastião",
    sentido: "MTZ → PL",
    dimensoes: "10,00 × 4,00 m",
    area: "40 m²",
    fluxo: "Muito Alto",
    status: "Disponível",
    lat: -19.575267,
    lng: -44.063266
  },

  // ============================================================
  // SÃO JOSÉ DA LAPA
  // ============================================================
  {
    id: "SJL-OUT-001",
    nome: "São José da Lapa - Rodovia MG-424, KM 5 (Jardim Encantado)",
    tipo: "Outdoor",
    cidade: "São José da Lapa",
    bairro: "Jardim Encantado",
    sentido: "BH → PL",
    dimensoes: "10,00 × 4,00 m",
    area: "40 m²",
    fluxo: "Muito Alto",
    status: "Ocupado",
    lat: -19.718216,
    lng: -43.958025
  },
  {
    id: "SJL-OUT-002",
    nome: "São José da Lapa - Rodovia MG-424, KM 5 (Jardim Encantado)",
    tipo: "Outdoor",
    cidade: "São José da Lapa",
    bairro: "Jardim Encantado",
    sentido: "PL → BH",
    dimensoes: "10,00 × 4,00 m",
    area: "40 m²",
    fluxo: "Muito Alto",
    status: "Disponível",
    lat: -19.718216,
    lng: -43.958025
  },

  // ============================================================
  // CLÁUDIO
  // ============================================================
  {
    id: "CL-OUT-001",
    nome: "Cláudio - Rodovia MG-260, KM 33 (Cachoeirinha)",
    tipo: "Outdoor",
    cidade: "Cláudio",
    bairro: "Cachoeirinha",
    sentido: "DIV → CL / CL → DIV",
    dimensoes: "9,00 × 3,00 m",
    area: "27 m²",
    fluxo: "Alto",
    status: "Ocupado",
    lat: -20.451513,
    lng: -44.778629
  }
];
