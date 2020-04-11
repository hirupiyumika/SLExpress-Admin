import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { getMenu } from "../../FakeDatabase/MenuBarData";
import styled from "styled-components";

class MenuBar extends Component {
  state = {
    MenuData: getMenu()
  };

  renderUrl = item => {
    const parts = item.split(" ");
    const combined = parts.join("-");
    return combined;
  };

  render() {
    return (
      <Grid.Column mobile={3} tablet={3} computer={3}>
        <Menu vertical>
          {this.state.MenuData.map(menu => (
            <Menu.Item key={menu.header}>
              <Menu.Header>{menu.header}</Menu.Header>

              <Menu.Menu>
                {menu.list.map(item => (
                  <Menu.Item key={item}>
                    <StyleMenuItem to={"/" + this.renderUrl(item)}>
                      {item}
                    </StyleMenuItem>
                  </Menu.Item>
                ))}
              </Menu.Menu>
            </Menu.Item>
          ))}
        </Menu>
      </Grid.Column>
    );
  }
}
export default MenuBar;

const StyleMenuItem = styled(Link)`
  text-transform: capitalize;
`;

// class MenuBar extends Component {
//   state = {
//     menuBarData: []

// };

// componentDidMount = () => {
//   this.setState({menuBarData: getMenuBarData()});
// console.log(menuBarData);
// };

//   render() {
//     return (
//     <Grid.Column mobile={3} tablet={3} computer={3}>
//       <Menu vertical>
//         {menuBarData.map(menu => (
//           <Menu.Item key={menu.header}>
//             <Menu.Header>{menu.header}</Menu.Header>

//             <Menu.Menu>
//               {menu.list.map(item => (
//                 <Menu.Item key={item}>
//                   <Link to={item} >{item}</Link>
//                 </Menu.Item>
//               ))}
//             </Menu.Menu>
//           </Menu.Item>
//         ))}
//       </Menu>
//     </Grid.Column>

//      );
//   }
// }

// export default MenuBar;

// const MenuBar = () => {
//   const [menuArray] = useState(menuBarData);

//   return (
//   );
// };

// export default MenuBar;
