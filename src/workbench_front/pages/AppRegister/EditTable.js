import React,{Component} from 'react';
import {Table, Input, InputNumber, Popconfirm,Select, Form} from 'antd';
const FormItem = Form.Item;
const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => {
    return  (
        <EditableContext.Provider value={form}>
            <tr {...props} />
        </EditableContext.Provider>
    )
};
const EditableFormRow = Form.create()(EditableRow);
class EditableCell extends React.Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return <InputNumber size="small" />;
        }
        return <Input size="small" />;
    };
    render() {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            ...restProps
        } = this.props;
        return (
            <EditableContext.Consumer>
                {
                    (form) => {
                        const { getFieldDecorator } = form;
                        return (
                            <td {...restProps}>
                                {editing ? (
                                    <FormItem>
                                        {getFieldDecorator(dataIndex, {
                                            rules: [{
                                                required: true,
                                                message: `Please Input ${title}!`,
                                            },
                                        ],
                                        initialValue: record[dataIndex],
                                        })(this.getInput())}
                                    </FormItem>
                                ) : (
                                    restProps.children
                                )}
                            </td>
                        );
                    }
                }
            </EditableContext.Consumer>
        );
    }
}
class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data, editingKey: '' };
        this.columns = [
            {
                title: 'name',
                dataIndex: 'name',
                width: '25%',
                editable: true,
            },
            {
                title: 'age',
                dataIndex: 'age',
                width: '15%',
                editable: true,
            },
            {
                title: 'address',
                dataIndex: 'address',
                width: '40%',
                editable: true,
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) => {
                const editable = this.isEditing(record);
                return (
                    <div className="editable-row-operations">
                    {editable ? (
                        <span>
                            <EditableContext.Consumer>
                            {form => (
                            <a
                                href="javascript:;"
                                onClick={() => this.save(form, record.key)}
                            >
                            Save
                            </a>
                        )}
                            </EditableContext.Consumer>
                            <Popconfirm
                                title="Sure to cancel?"
                                onConfirm={() => this.cancel(record.key)}
                            >
                                <a>Cancel</a>
                            </Popconfirm>
                        </span>
                    ) : (
                        <a onClick={() => this.edit(record.key)}>Edit</a>
                    )}
                    </div>
                );
            },
        }];
    }
    isEditing = (record) => {
        return record.key === this.state.editingKey;
    };
    edit(key) {
        this.setState({ editingKey: key });
    }
    save(from, key) {
        from.validateFields((error, row) => {
        if (error) {
            return;
        }
        const newData = [...this.state.data];
        const index = newData.findIndex(item => key === item.key);
        if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, {
            ...item,
            ...row,
            });
            this.setState({ data: newData, editingKey: '' });
        } else {
            newData.push(data);
            this.setState({ data: newData, editingKey: '' });
        }
        });
    }
    cancel = () => {
        this.setState({ editingKey: '' });
    };
    render() {
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: this.isEditing(record),
                }),
            };
        });
        return (
            <Table
                components={components}
                bordered
                dataSource={this.state.data}
                columns={columns}
            />
        );
    }
}