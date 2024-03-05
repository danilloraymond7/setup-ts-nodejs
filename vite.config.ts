import { defineConfig } from 'vite' // Importa a função defineConfig do pacote 'vite' para definir a configuração do Vite.
import tsconfigPaths from 'vite-tsconfig-paths' // Importa o plugin 'vite-tsconfig-paths' para resolver caminhos de módulos TypeScript com base no tsconfig.json.
import eslint from 'vite-plugin-eslint' // Importa o plugin 'vite-plugin-eslint' para integrar o ESLint ao projeto Vite.

export default defineConfig({
  plugins: [tsconfigPaths(), eslint()], // Configuração dos plugins do Vite. Aqui, usamos os plugins 'vite-tsconfig-paths' e 'vite-plugin-eslint'.
  server: {
    host: true, // Define o host do servidor como 'true', o que faz com que o Vite escolha automaticamente o IP de rede disponível.
    port: 5017, // Define a porta do servidor como 5017.
    watch: {
      usePolling: true // Ativa o polling de arquivo para detectar alterações nos arquivos do projeto. Útil em ambientes de desenvolvimento remoto ou virtualizado.
    }
  }
})
