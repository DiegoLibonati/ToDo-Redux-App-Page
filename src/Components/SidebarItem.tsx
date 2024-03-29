import { SidebarItemProps } from "../entities/entities";

export const SidebarItem = ({
  onOpenCategoryTodo,
  icon,
  category,
  todosCategory,
  index,
}: SidebarItemProps) => {
  return (
    <>
      <li className="sidebar_nav_list_item">
        <h2 onClick={(e) => onOpenCategoryTodo(e)}>
          {icon}
          {category}
        </h2>
        <h2>{todosCategory?.length}</h2>
      </li>

      {index === 2 && <hr className="hr-sidebar"></hr>}
    </>
  );
};
