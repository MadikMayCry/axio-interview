import React from 'react';
import { Input, message, Modal, Row } from 'antd';
import { useRevalidator } from 'react-router-dom';
import { createTask } from '~/services/create-task';
import { formatDate } from '~/services/format-date';
import { CANT_CREATE_FORM, CREATE_TASK, FILL_THE_FORM } from '~/const';
import { ModalComponentProps } from '~/types';

export const ModalComponent: React.FC<ModalComponentProps> = ({
  date,
  isModalOpen,
  hideModal,
}) => {
  const revalidator = useRevalidator();

  const [input, setInput] = React.useState<string>('');

  const inputHandler = (e: React.FormEvent<HTMLInputElement>) =>
    setInput(e.currentTarget.value);

  const onSubmit = () => {
    if (input) {
      createTask({ title: input, date: formatDate(date) })
        .then(() => {
          revalidator.revalidate();
          setInput('');
          hideModal();
        })
        .catch((e) => {
          message.error(CANT_CREATE_FORM);
          console.log(e);
        });
      return;
    }
    message.warning(FILL_THE_FORM);
  };

  return (
    <Modal
      title={`${CREATE_TASK} ${formatDate(date)}`}
      open={isModalOpen}
      onOk={onSubmit}
      onCancel={hideModal}
    >
      <Row gutter={24}>
        <Input onChange={inputHandler} value={input} />
      </Row>
    </Modal>
  );
};
