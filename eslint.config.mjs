import abhishek from '@abhishek/eslint-config'

export default abhishek({
  project: './tsconfig.json',
  tsconfigRootDir: import.meta.dirname,
  react: true,
  next: true
})
