
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
      dataIndex: "volumeInfo.title",
      key: "volumeInfo.title",
      title: "Title",
      width: "auto",
    },
    {
      dataIndex: "volumeInfo.authors",
      key: "volumeInfo.authors",
      title: "Author",
      width: "auto",
    },
    {
      dataIndex: "volumeInfo.publisher",
      key: "volumeInfo.publisher",
      title: "Publisher",
      width: "auto",
    },
    {
      dataIndex: "volumeInfo.publishedDate",
      key: "year",
      title: "Published Date",
      width: "auto",   
    },
    {
      dataIndex: "volumeInfo.averageRating",
      key: "volumeInfo.averageRating",
      title: "Average Rating",
      width: "auto",
    },
  ];
}