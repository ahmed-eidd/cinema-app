export const limitText = (name, limit = 17) => {
  const newTitle = [];
  if (name.length > limit) {
    name.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) newTitle.push(cur);
      return acc + cur.length;
    }, 0);
    return `${newTitle.join(' ')} ...`;
  }
  return name;
};
