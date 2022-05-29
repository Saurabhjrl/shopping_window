const windows = [
  {
    id: 1,
    shop_id: 1,
    title: "Front Entrance",
    url: "/images/window1.jpg",
    state: true,
    items: 4,
  },
  {
    id: 2,
    shop_id: 1,
    title: "Left Shopping Window",
    url: "/images/window2.jpg",
    state: true,
    items: 7,
  },
  {
    id: 3,
    shop_id: 2,
    title: "Shoe Wall",
    url: "/images/window3.jpg",
    state: false,
    items: 16,
  },
  {
    id: 4,
    shop_id: 2,
    title: "Entrance Shopping Window",
    url: "",
    state: true,
    items: 4,
  },
  {
    id: 5,
    shop_id: 3,
    title: "Right Shopping Window",
    url: "/images/window5.jpg",
    state: false,
    items: 9,
  },
  {
    id: 6,
    shop_id: 3,
    title: "1st floor Window",
    url: "/images/window6.jpg",
    state: false,
    items: 7,
  },
];

export function getWindows(shop_id) {
  return windows.filter((window) => window.shop_id === shop_id);
}
