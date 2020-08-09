import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

class Tablerow extends React.Component {
  state = {
    rows: [{}],
  };

  handleChange = (idx) => (e) => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value,
    };
    this.setState({
      rows,
    });
  };
  handleAddRow = () => {
    const item = {
      name: "",
      degree: "",
      placeofwork: "",
      signiture: "",
      id: "",
    };
    this.setState({
      rows: [...this.state.rows, item],
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1),
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };
  render() {
    return (
      <TableContainer className="mt-10 border rounded-lg border-gray-500 p-4">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">ت</TableCell>
              <TableCell align="right" className="font-cairo">
                اسماء الباحثون
              </TableCell>
              <TableCell align="right">المرتبة العلمية</TableCell>
              <TableCell align="right">مكان العمل</TableCell>
              <TableCell align="right">التوقيع</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row" align="right">
                  {idx + 1}
                </TableCell>
                <TableCell align="right">
                  <input
                    type="text"
                    name="name"
                    value={this.state.rows[idx].name}
                    onChange={this.handleChange(idx)}
                    className="border rounded-lg border-gray-500 py-2 pr-4"
                  />
                </TableCell>
                <TableCell align="right">
                  <input
                    type="text"
                    name="degree"
                    value={this.state.rows[idx].degree}
                    className="border rounded-lg border-gray-500 py-2 pr-4"
                    onChange={this.handleChange(idx)}
                  />
                </TableCell>
                <TableCell align="right">
                  <input
                    type="text"
                    name="placeofwork"
                    value={this.state.rows[idx].placeofwork}
                    className="border rounded-lg border-gray-500 py-2 pr-4"
                    onChange={this.handleChange(idx)}
                  />
                </TableCell>
                <TableCell align="right">
                  <input
                    type="text"
                    name="signiture"
                    value={this.state.rows[idx].signiture}
                    className="border rounded-lg border-gray-500 py-2 pr-4"
                    onChange={this.handleChange(idx)}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handleRemoveSpecificRow(idx)}
                  >
                    إزالـة
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 ml-4 lefttoright">
          <Button
            onClick={this.handleAddRow}
            variant="contained"
            color="primary"
          >
            إضافة صف
          </Button>
        </div>
      </TableContainer>
    );
  }
}
export default Tablerow;
