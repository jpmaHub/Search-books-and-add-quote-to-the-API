import { Component } from "react";
import React from "react";
import { Input, Form, Button } from "antd";
import styles from "./index.module.scss";

export interface IAddQuoteData {
  execute: (author: string, quote: string) => Promise<void>;
}

interface IProps {
  add: IAddQuoteData;
}

export default class AddQuote extends Component<IProps> {
  private textInputAuthor: React.RefObject<Input>;
  private textInputQuote: React.RefObject<Input>;

  constructor(props: IProps) {
    super(props);
    this.textInputAuthor = React.createRef();
    this.textInputQuote = React.createRef();
  }

  public async submit(e: any) {
    e.preventDefault()
    let author = this.textInputAuthor.current!.state.value
    let quote = this.textInputQuote.current!.state.value

    await this.props.add.execute(author, quote);
  }

  public render() {
    return (
      <Form data-test="add-quote-form" onSubmit={this.submit.bind(this)}>
        <Form.Item>
          Author
          <Input ref={this.textInputAuthor} data-test="inputTextAuthor" type="text" className={styles.inputLabel} />
        </Form.Item>
        <Form.Item>
          Quote
          <Input ref={this.textInputQuote} data-test="inputTextQuote" type="text" className={styles.inputLabel} />
        </Form.Item>
        <Form.Item>
          <Button
            data-test="add-quote-button"
            type="primary"
            htmlType="submit"
          >
            Add Quote
          </Button>
        </Form.Item>
      </Form>
    )
  }
}


