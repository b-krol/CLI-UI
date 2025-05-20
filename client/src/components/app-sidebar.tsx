const listItems = [
  {
    text: "el1",
    url: "#",
  },
  {
    text: "el2",
    url: "#",
  },
  {
    text: "el3",
    url: "#",
  }
];

export function AppSidebar() {
  return (
    <ul className="sidebar">
      <ul className="sidebar-head">
        <h1 className="sidebar-head-title">Menu</h1>
      </ul>
      <ul className="sidebar-list">
        {listItems.map((item) => (
          <li className="sidebar-list-item">
            {/*<item.icon className="sidebar-icon mr-2 h-6 w-6 inline-block stroke-blue-500 group-hover:stroke-blue-200 duration-300" />*/}
            <span className="">{item.text}</span>
          </li>
        ))}
      </ul>
    </ul>
  );
}
