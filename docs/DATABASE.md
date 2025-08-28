# Sistema de Coleta de Emails - Documentação

## Visão Geral

Este sistema permite coletar emails dos usuários junto com informações sobre o dispositivo (iOS ou não) e o parâmetro de anúncio armazenado no localStorage.

## Estrutura do Banco de Dados

### Tabela `emails`

| Campo     | Tipo     | Descrição                                    |
|-----------|----------|----------------------------------------------|
| id        | String   | ID único (CUID)                              |
| email     | String   | Email do usuário                             |
| isIOS     | Boolean  | Se o dispositivo é iOS (iPad/iPhone/iPod)   |
| adType    | String?  | Tipo de anúncio (A, B, C) ou null           |
| createdAt | DateTime | Data e hora de criação                       |
| updatedAt | DateTime | Data e hora da última atualização           |

## Como Usar

### 1. Hooks Disponíveis

#### `useDeviceDetection()`
Detecta se o usuário está usando um dispositivo iOS.

```typescript
const { isIOS, isLoading } = useDeviceDetection();
```

#### `useAdParameter()`
Obtém o parâmetro de anúncio salvo no localStorage (A, B, C).

```typescript
const adType = useAdParameter(); // 'A' | 'B' | 'C' | null
```

#### `useEmailSubmission()`
Hook completo para submissão de emails com todas as informações.

```typescript
const { 
  submitEmail, 
  isLoading, 
  error, 
  success, 
  resetState,
  deviceInfo 
} = useEmailSubmission();

// Para submeter um email
const result = await submitEmail({ email: 'usuario@exemplo.com' });
```

### 2. Componente de Exemplo

Você pode usar o componente `EmailForm` como base ou criar seu próprio:

```typescript
import EmailForm from '@/components/EmailForm';

// Em seu componente
<EmailForm />
```

### 3. API Endpoints

#### POST `/api/emails`
Salva um novo email no banco de dados.

**Body:**
```json
{
  "email": "usuario@exemplo.com",
  "isIOS": true,
  "adType": "A"
}
```

**Resposta de Sucesso (201):**
```json
{
  "message": "Email salvo com sucesso!",
  "id": "clxxx..."
}
```

**Resposta de Erro (400/500):**
```json
{
  "error": "Mensagem de erro"
}
```

#### GET `/api/emails`
Lista todos os emails salvos (para desenvolvimento).

## Comandos Úteis

### Banco de Dados
```bash
# Aplicar migrações
npm run db:migrate

# Gerar cliente Prisma
npm run db:generate

# Abrir Prisma Studio (interface gráfica)
npm run db:studio

# Push mudanças do schema (desenvolvimento)
npm run db:push

# Reset do banco (apaga todos os dados)
npm run db:reset
```

### Desenvolvimento
```bash
# Rodar o projeto
npm run dev

# Ver logs do banco no Prisma Studio
npm run db:studio
```

## Fluxo de Funcionamento

1. **Detecção Automática**: Quando a página carrega, o sistema detecta automaticamente:
   - Se o dispositivo é iOS
   - Qual parâmetro de anúncio está salvo no localStorage

2. **Coleta de Email**: Quando o usuário submete o email:
   - Email é validado
   - Informações do dispositivo e parâmetro são capturadas automaticamente
   - Dados são salvos no banco via API

3. **Persistência**: Todos os dados ficam salvos no banco SQLite para análise posterior.

## Personalização

### Alterar Validações
Edite o arquivo `src/app/api/emails/route.ts` para modificar as validações.

### Adicionar Novos Campos
1. Atualize o modelo no `prisma/schema.prisma`
2. Execute `npm run db:migrate`
3. Atualize os tipos TypeScript nos hooks
4. Modifique a API para aceitar os novos campos

### Trocar Banco de Dados
Para usar PostgreSQL ou MySQL, edite o `datasource` no `prisma/schema.prisma` e atualize a `DATABASE_URL` no `.env`.
