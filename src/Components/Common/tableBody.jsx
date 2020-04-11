import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import _ from "lodash";
import Moment from "react-moment";
import moment from "moment";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else if (column.date)
      return <Moment format="DD/MM/YYYY ">{_.get(item, column.date)}</Moment>;
    else if (column.id) {
      const id = _.get(item, column.id);
      const name = this.props.map1.filter((n) => n._id == id);
      //console.log("name", name);
      if (name.length == 0) return "anonymus";
      else return name[0].firstName || name[0].name;
    } else if (column.count) {
      var count;
      const id = _.get(item, column.count);
      console.log("id", id);
      var match = this.props.map2.filter((c) => c.scriptId == id);
      const length = match.length;
      console.log("length", length);
      if (length !== 0) {
        count = length;
        return count;
      } else return (count = 0);
    }

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns, map1, map2, currentPage } = this.props;
    console.log("developer", map1);
    console.log("buyers", map2);
    return (
      <>
        {data &&
          data.map((item, index) => (
            <Table.Body>
              <Table.Row key={item._id}>
                <Table.Cell key={index}>
                  {5 * (currentPage - 1) + index + 1}
                </Table.Cell>
                {columns.map((column) => (
                  <Table.Cell key={this.createKey(item, column)}>
                    {this.renderCell(item, column)}
                  </Table.Cell>
                ))}
              </Table.Row>
            </Table.Body>
          ))}
      </>
    );
  }
}

export default TableBody;

// const TableBody = ({ header, data }) => {
//   // console.log(data);

//   return (
//     <>
//       {data &&
//         data.map((row, index) => (
//           <Table.Body key={row._id}>
//             <Table.Row>
//               <Table.Cell>{index + 1}</Table.Cell>
//               {header.map((title, index) => (
//                 <>
//                   {Object.keys(row).map((cell, index) => {
//                     return (
//                       title.path === Object.keys(row)[index] && (
//                         <Table.Cell> {row[Object.keys(row)[index]]}</Table.Cell>
//                       )
//                     );
//                   })}
//                 </>
//               ))}
//               <Table.Cell>
//                 <Link to="UserDetails">
//                   <Details />
//                 </Link>
//                 <Delete />
//               </Table.Cell>
//             </Table.Row>
//           </Table.Body>
//         ))}
//     </>
//   );
// };

// export default TableBody;
