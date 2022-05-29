function filterData(items, query) {
  if (query) {
    // filter data
    return items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  return items;
}

export default filterData;
