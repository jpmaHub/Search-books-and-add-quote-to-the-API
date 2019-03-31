
import React, { Component } from "react";
import { Table } from "antd";
import { ColumnProps } from "antd/lib/table/interface";
import { IBookListItem } from "../../UseCases/GetBooksSearch";

interface IBooksProps {
  booksData: IBookListItem[];
}

export default class ViewBook extends Component <IBooksProps> {
  private rowKey = (record: IBookListItem) => record && record.id;

  public render(){
    return (
      <Table
      className="table-wrapper"
      size="middle"
      data-test="table-wrapper-test"
      columns={GetColumns()}
      dataSource={this.props.booksData}
      rowKey={this.rowKey}
    />
    );
  }
 
}

function GetColumns(): ColumnProps<IBookListItem>[] {
  return [
    {
      dataIndex: "volumnInfo.title",
      key: "volumnInfo.title",
      title: "Title",
      width: "auto",
    },
    {
      dataIndex: "volumnInfo.authors",
      key: "volumnInfo.authors",
      title: "Author",
      width: "auto",
    },
    {
      dataIndex: "volumnInfo.publisher",
      key: "volumnInfo.publisher",
      title: "Publisher",
      width: "auto",
    },
    {
      dataIndex: "volumnInfo.averageRating",
      key: "volumnInfo.averageRating",
      title: "Average Rating",
      width: "auto",
    },
  ];
}