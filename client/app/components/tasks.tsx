import React from 'react';
import { Flex, List, Typography, message, Popconfirm, Button } from 'antd';
import { ITasks } from '~/types';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { deleteTask } from '~/services/delete-task';
import { DELETE_ERROR, DELETE_SUCCESS, YOUR_TASKS } from '~/const';
import { useRevalidator } from 'react-router-dom';

export const Tasks: React.FC<{ tasks: ITasks; showModal: () => void }> = ({
  tasks,
  showModal,
}) => {
  const revalidator = useRevalidator();

  const confirmDelete = (id: number) => {
    deleteTask(id)
      .then((r) => {
        console.log(r);
        revalidator.revalidate();

        message.success(DELETE_SUCCESS);
      })
      .catch((e) => {
        console.error(DELETE_ERROR, e);
        message.error(DELETE_ERROR);
      });
  };

  return (
    <List
      header={
        <Flex justify={'space-between'}>
          <Typography>{YOUR_TASKS}</Typography>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={showModal}
          />
        </Flex>
      }
      bordered
      dataSource={tasks}
      renderItem={(task) => (
        <List.Item
          style={{
            display: 'block',
          }}
        >
          <Flex justify={'space-between'}>
            <Typography>{task.title}</Typography>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => confirmDelete(task.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button shape="circle" icon={<DeleteOutlined />} />
            </Popconfirm>
          </Flex>
        </List.Item>
      )}
    />
  );
};
