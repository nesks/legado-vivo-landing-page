

export default function ImageExample() {
  return (
    <div className="p-8 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Exemplos de Uso de Imagens</h3>
      
      <div className="space-y-4">
        {/* Exemplo de imagem hero */}
        <div className="border p-4 rounded">
          <h4 className="font-medium mb-2">Hero Image:</h4>
          <div className="bg-gray-200 h-32 flex items-center justify-center rounded">
            <p className="text-gray-500 text-sm">
              {/* Exemplo de como usar uma imagem hero */}
              {/* <Image
                src="/images/hero/hero-banner.jpg"
                alt="Banner principal do LegadoVivo"
                width={1200}
                height={600}
                priority
                className="rounded-lg"
              /> */}
              Placeholder para imagem hero
            </p>
          </div>
        </div>

        {/* Exemplo de logo */}
        <div className="border p-4 rounded">
          <h4 className="font-medium mb-2">Logo:</h4>
          <div className="bg-white h-16 flex items-center justify-center rounded">
            <p className="text-gray-500 text-sm">
              {/* Exemplo de como usar um logo */}
              {/* <Image
                src="/images/logos/logo-legado-vivo.png"
                alt="Logo LegadoVivo"
                width={200}
                height={60}
                className="h-12 w-auto"
              /> */}
              Placeholder para logo
            </p>
          </div>
        </div>

        {/* Exemplo de ícone */}
        <div className="border p-4 rounded">
          <h4 className="font-medium mb-2">Ícone:</h4>
          <div className="bg-white h-16 flex items-center justify-center rounded">
            <p className="text-gray-500 text-sm">
              {/* Exemplo de como usar um ícone */}
              {/* <Image
                src="/images/icons/security-shield.svg"
                alt="Ícone de segurança"
                width={32}
                height={32}
                className="w-8 h-8"
              /> */}
              Placeholder para ícone
            </p>
          </div>
        </div>

        {/* Exemplo de ilustração */}
        <div className="border p-4 rounded">
          <h4 className="font-medium mb-2">Ilustração:</h4>
          <div className="bg-white h-32 flex items-center justify-center rounded">
            <p className="text-gray-500 text-sm">
              {/* Exemplo de como usar uma ilustração */}
              {/* <Image
                src="/images/illustrations/legacy-concept.svg"
                alt="Conceito de legado digital"
                width={400}
                height={300}
                className="w-full h-auto"
              /> */}
              Placeholder para ilustração
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded">
        <h4 className="font-medium mb-2">📁 Estrutura de Pastas Criada:</h4>
        <pre className="text-sm text-gray-700">
{`public/images/
├── hero/           # Imagens da seção hero
├── icons/          # Ícones SVG e PNG
├── backgrounds/    # Imagens de fundo
├── illustrations/  # Ilustrações
└── logos/          # Logos e marcas`}
        </pre>
      </div>
    </div>
  );
}
