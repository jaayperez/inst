import React, { useState, useEffect } from 'react';
import { toaster } from 'baseui/toast';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import Loader from '../../components/UiElements/Loader/Loader';
import Toaster from '../../components/UiElements/Toaster/Toaster';
import AddEditModal from './AddEdit';
import {
  getDocuments,
  addDocument,
  updateDocument,
  deleteDocument,
  addCollectionAndDocuments,
} from '../../firebase/service';
import demoData from './demo.data';
import { getTimeStamp } from '../../firebase/initialize';
import CrudTable from './CrudTable';
const statusOptions = [
  { label: 'Draft', id: 'draft' },
  { label: 'Publish', id: 'publish' },
];

const TITLE = 'Firebase CRUD';
const SUB_TITLE =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod';
const FirebaseCRUD = () => {
  let toastKey;
  const [articles, setArticles] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editState, setEditState] = useState(false);
  const [error, setError] = useState(false);
  const [article, setArticle] = useState({
    id: null,
    title: '',
    description: '',
    slug: '',
    status: [],
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getDocuments('articles');
      //for demo only
      if (!data.length) {
        addCollectionAndDocuments(
          'articles',
          demoData.map(data => ({ ...data, createdAt: getTimeStamp() }))
        );
      }
      setArticles(data);
      setLoading(false);
    } catch (error) {
      toastKey = toaster.negative(<>{'Data Fetching Failed!'}</>, {
        autoHideDuration: 1000,
      });
      setLoading(false);
    }
  };
  const handleAddArticle = () => {
    setVisible(true);
    setEditState(false);
    setArticle({
      id: null,
      title: '',
      description: '',
      slug: '',
      status: [],
    });
  };

  const handleModdalClose = () => {
    setVisible(false);
    setArticle({
      id: null,
      title: '',
      description: '',
      slug: '',
      status: [],
    });
  };

  const handleDeleteArticle = async (id: string) => {
    if (id) {
      try {
        const deleted = await deleteDocument('articles', id);
        toastKey = toaster.info(<>{'Deleted Successfully!'}</>, {
          autoHideDuration: 2000,
        });
        if (deleted) {
          fetchData();
        }
      } catch (error) {
        console.log(error);
        toastKey = toaster.info(<>{'Deletion Failed!'}</>, {
          autoHideDuration: 2000,
        });
      }
    }
  };

  const handleUpdateArticle = async (item: any) => {
    setVisible(true);
    setEditState(true);
    const index = statusOptions.findIndex(option => option.id === item.status);
    let status = { label: 'Draft', id: 'draft' };
    if (index > -1) {
      status = statusOptions[index];
    }
    setArticle({
      ...article,
      ...item,
      status,
    });
  };

  const handleOnChange = (name: string) => (e: any) => {
    let value: any;
    if (name === 'status') {
      value = e.value;
    } else {
      value = e.target.value;
    }

    setArticle({
      ...article,
      [name]: value,
    });
  };

  const checkError = () => {
    let errorStatus = false;
    const { title, description, slug, status } = article;
    if (!title || !description || !slug || !status) {
      errorStatus = true;
    } else {
      errorStatus = false;
    }
    setError(errorStatus);
    return errorStatus;
  };
  const handleOnSubmit = async () => {
    const errorStatus = checkError();
    const status =
      article.status && article.status.length ? article.status[0].id : 'draft';
    const slug = article.id ? article.slug : `${article.slug}-${Date.now()}`;
    const data = {
      ...article,
      slug,
      status,
    };
    let id = null;
    if (article.id && !errorStatus) {
      try {
        id = await updateDocument('articles', data);
        toastKey = toaster.info(<>{'Update Successful!'}</>, {
          autoHideDuration: 2000,
        });
      } catch (error) {
        toastKey = toaster.negative(<>{'Update Failed!'}</>, {
          autoHideDuration: 2000,
        });
        console.log(error);
      }
      setVisible(false);
    } else if (!article.id && !errorStatus) {
      try {
        id = await addDocument('articles', data);
        toastKey = toaster.info(<>{'Successful!'}</>, {
          autoHideDuration: 2000,
        });
      } catch (error) {
        toastKey = toaster.negative(<>{'Failed!'}</>, {
          autoHideDuration: 2000,
        });
        console.log(error);
      }
      setVisible(false);
    }
    if (id) {
      fetchData();
    }
  };

  return (
    <>
      <Toaster toastKey={toastKey} />
      <Block
        paddingTop={['10px', '10px', 0]}
        overrides={{
          Block: {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '40px',
            },
          },
        }}
      >
        <Block>
          <Block
            as="h3"
            overrides={{
              Block: {
                style: ({ $theme }) => {
                  return {
                    ...$theme.typography.font450,
                    color: $theme.colors.primaryA,
                    marginBottom: '10px',
                  };
                },
              },
            }}
          >
            {TITLE}
          </Block>
          <Block
            as="p"
            overrides={{
              Block: {
                style: ({ $theme }) => {
                  return {
                    ...$theme.typography.font200,
                    color: $theme.colors.contentSecondary,
                  };
                },
              },
            }}
          >
            {SUB_TITLE}
          </Block>
        </Block>
        <Block overrides={{ Block: { style: { flexShrink: 0 } } }}>
          <Button
            onClick={handleAddArticle}
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
            Add Article
          </Button>
        </Block>
      </Block>

      <Block
        overrides={{
          Block: {
            style: {
              minHeight: '150px',
            },
          },
        }}
      >
        {loading ? (
          <Loader />
        ) : (
          <CrudTable
            data={articles}
            onUpdate={handleUpdateArticle}
            onDelete={handleDeleteArticle}
          />
        )}
      </Block>

      <AddEditModal
        error={error}
        article={article}
        visible={visible}
        editState={editState}
        statusOptions={statusOptions}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        handleModdalClose={handleModdalClose}
      />
    </>
  );
};

export default FirebaseCRUD;
