import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MUIDataTable from "mui-datatables";

class Fruit {
  constructor(name, rank, origin, farmer, remark) {
    Fruit.counter = ++Fruit.counter || 1;
    this.id = Fruit.counter;
    this.name = name;
    this.rank = rank;
    this.origin = origin;
    this.farmer = farmer;
    this.remark = remark;
  }
}

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        ['百香果', 'Class A', '售出', '2018/12/08'],
        ['百香果', 'Class B', '售出', '2018/12/08'],
        ['百香果', 'Class C', '代售', '2018/12/08']
      ],
      columns: [
        {name: "水果", option: {filter: true, sort: true}},
        {name: "等級", option: {filter: true, sort: true}},
        {name: "狀態", option: {filter: true, sort: true}},
        {name: "登記日期", option: {filter: true, sort: true}}
      ]
    }
  }

  render() {
    return (
      <React.Fragment>
        <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            我的產品
          </Typography>
        </Toolbar>
        </AppBar>
        <MUIDataTable title={"我的產品"} columns={this.state.columns} data={this.state.data} options={Product.option}/>
      </React.Fragment>
    );
  }
}

Product.option = {
  filterType: "dropdown",
  responsive: "scroll",
  selectableRows: true,
  textLabels: {
    body: {
      noMatch: "抱歉, 找不到結果",
      toolTip: "排序",
    },
    pagination: {
      next: "下一頁",
      previous: "上一頁",
      rowsPerPage: "每頁列數:",
    },
    toolbar: {
      search: "搜尋",
      downloadCsv: "下載成CSV",
      print: "列印",
      viewColumns: "選擇顯示行",
      filterTable: "篩選資料",
    },
    filter: {
      all: "全選",
      title: "篩選",
      reset: "重設",
    },
    viewColumns: {
      title: "顯示行",
      titleAria: "顯示/隱藏 行",
    },
    selectedRows: {
      text: "rows(s) selected",
      delete: "刪除",
      deleteAria: "刪除所選列",
    },
  }
}

export default Product;