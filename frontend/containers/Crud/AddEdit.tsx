import React from 'react';
import { Button } from 'baseui/button';
import { Modal, ModalHeader, ModalBody } from 'baseui/modal';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Textarea } from 'baseui/textarea';
import { Select } from 'baseui/select';

const AddEditModal = ({
  error,
  article,
  visible,
  editState,
  statusOptions,
  handleOnChange,
  handleOnSubmit,
  handleModdalClose,
}) => {
  return (
    <>
      <Modal
        onClose={handleModdalClose}
        closeable
        isOpen={visible}
        animate
        size="default"
        role="dialog"
        unstable_ModalBackdropScroll={true}
        overrides={{
          Root: {
            style: () => {
              return { zIndex: 9999 };
            },
          },
        }}
      >
        <ModalHeader>
          {editState ? 'Update Article' : 'Add Article'}
        </ModalHeader>

        <ModalBody style={{ overflow: 'hidden' }}>
          <FlexGrid flexGridColumnCount={1}>
            <FlexGridItem>
              <FormControl
                label="Title"
                error={error && !article.title ? 'Please fill out title' : null}
                overrides={{
                  Label: {
                    style: ({ $theme }) => {
                      return { ...$theme.typography.font200 };
                    },
                  },
                }}
              >
                <Input
                  name="title"
                  value={article.title}
                  error={error && !article.title}
                  onChange={handleOnChange('title')}
                  overrides={{
                    InputContainer: {
                      style: () => {
                        return { backgroundColor: 'transparent' };
                      },
                    },
                  }}
                />
              </FormControl>
            </FlexGridItem>

            <FlexGridItem>
              <FormControl
                label="Description"
                error={
                  error && !article.description
                    ? 'Please fill out description'
                    : null
                }
                overrides={{
                  Label: {
                    style: ({ $theme }) => {
                      return { ...$theme.typography.font200 };
                    },
                  },
                }}
              >
                <Textarea
                  value={article.description}
                  onChange={handleOnChange('description')}
                  error={error && !article.description}
                  overrides={{
                    InputContainer: {
                      style: () => {
                        return { backgroundColor: 'transparent' };
                      },
                    },
                  }}
                />
              </FormControl>
            </FlexGridItem>

            <FlexGridItem>
              <FormControl
                label="Slug"
                error={error && !article.slug ? 'Please fill out slug' : null}
                overrides={{
                  Label: {
                    style: ({ $theme }) => {
                      return { ...$theme.typography.font200 };
                    },
                  },
                }}
              >
                <Input
                  value={article.slug}
                  onChange={handleOnChange('slug')}
                  error={error && !article.slug}
                  overrides={{
                    InputContainer: {
                      style: () => {
                        return { backgroundColor: 'transparent' };
                      },
                    },
                  }}
                />
              </FormControl>
            </FlexGridItem>

            <FlexGridItem>
              <FormControl
                label="Status"
                error={
                  error && !article.status.length
                    ? 'Please choose a status option'
                    : null
                }
                overrides={{
                  Label: {
                    style: ({ $theme }) => {
                      return { ...$theme.typography.font200 };
                    },
                  },
                }}
              >
                <Select
                  options={statusOptions}
                  placeholder=""
                  value={article.status}
                  error={error && !article.status.length}
                  onChange={handleOnChange('status')}
                  overrides={{
                    ControlContainer: {
                      style: () => {
                        return { backgroundColor: 'transparent' };
                      },
                    },
                  }}
                />
              </FormControl>
            </FlexGridItem>

            <FlexGridItem
              overrides={{ Block: { style: { marginTop: '30px' } } }}
            >
              <Button
                onClick={handleOnSubmit}
                overrides={{
                  BaseButton: {
                    style: ({ $theme }) => {
                      return {
                        ...$theme.typography.font250,
                      };
                    },
                  },
                }}
              >
                {editState ? 'Update Article' : 'Add Article'}
              </Button>
              <Button
                kind="minimal"
                onClick={handleModdalClose}
                overrides={{
                  BaseButton: {
                    style: ({ $theme }) => {
                      return {
                        ...$theme.typography.font250,
                      };
                    },
                  },
                }}
              >
                Cancel
              </Button>
            </FlexGridItem>
          </FlexGrid>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddEditModal;
