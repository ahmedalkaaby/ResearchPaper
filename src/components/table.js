import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

class Tablerow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [{ name: "", degree: "", placeofwork: "", signiture: "" }],
    };
  }

  handleAddRow = () => {
    const item = {
      name: "",
      degree: "",
      placeofwork: "",
      signiture: "",
    };
    this.setState({
      rows: [...this.state.rows, item],
    });
  };

  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };
  render() {
    const rows = this.state.rows;

    return (
      <TableContainer className="mt-10 border rounded-lg border-gray-500 p-4">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">ت</TableCell>
              <TableCell align="right" className="mr-2">
                اسماء الباحثون
              </TableCell>
              <TableCell align="right">المرتبة العلمية</TableCell>
              <TableCell align="right">مكان العمل</TableCell>
              <TableCell align="right">التوقيع</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((value, idx) => (
              <TableRow
                key={idx}
                onChange={this.props.handleChange(this.state.rows)}
              >
                <TableCell component="th" scope="row" align="right">
                  {idx + 1}
                </TableCell>
                <TableCell align="right">
                  <input
                    type="text"
                    name="name"
                    value={rows[idx].name}
                    onChange={(e) => {
                      rows[idx].name = e.target.value;
                      this.setState({ rows });
                    }}
                    className="border rounded-lg border-gray-500 py-2 pr-4"
                  />
                </TableCell>
                <TableCell align="right">
                  <input
                    type="text"
                    name="degree"
                    value={rows[idx].degree}
                    className="border rounded-lg border-gray-500 py-2 pr-4"
                    onChange={(e) => {
                      rows[idx].degree = e.target.value;
                      this.setState({ rows });
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <input
                    type="text"
                    name="placeofwork"
                    value={rows[idx].placeofwork}
                    className="border rounded-lg border-gray-500 py-2 pr-4"
                    onChange={(e) => {
                      rows[idx].placeofwork = e.target.value;
                      this.setState({ rows });
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <input
                    type="text"
                    name="signiture"
                    value={rows[idx].signiture}
                    className="border rounded-lg border-gray-500 py-2 pr-4"
                    onChange={(e) => {
                      rows[idx].signiture = e.target.value;
                      this.setState({ rows });
                    }}
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
