const truncateString = (str: string | undefined, numWords: number): string => {
    if (!str) {
      return ''; 
    }
  
    const words = str.split(' ');
    if (words.length <= numWords) {
      return str;
    }
  
    return words.slice(0, numWords).join(' ') + '...';
  };
  
  export default truncateString;
  