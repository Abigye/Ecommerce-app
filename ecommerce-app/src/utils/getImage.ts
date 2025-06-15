const images = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  });
  
  export const getImage = (relativePath: string): string | undefined => {
    const cleanedPath = `../assets${relativePath.replace('./assets', '')}`;
    return images[cleanedPath] as string | undefined;
  };
