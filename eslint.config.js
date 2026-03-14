import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  ...pluginVue.configs['flat/essential'],
  {
    name: 'app/vue-rules-override',
    rules: {
      // Single-word names are acceptable for page-level view components
      'vue/multi-word-component-names': 'off',
    },
  },
  skipFormatting,
]
