const importAll = (context) => context.keys().map((element) => context(element))

export { importAll }
