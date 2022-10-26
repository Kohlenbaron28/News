export const getComments = async () => {
    let today =new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
    return [
      {
        id: "1",
        body: "First comment",
        username: "Jack",
        userId: "1",
        parentId: null,
        createdAt: today,
      },
      {
        id: "2",
        body: "Second comment",
        username: "John",
        userId: "2",
        parentId: null,
        createdAt: today,
      },
      {
        id: "3",
        body: "First comment first child",
        username: "John",
        userId: "2",
        parentId: "1",
        createdAt: today,
      },
      {
        id: "4",
        body: "Second comment second child",
        username: "John",
        userId: "2",
        parentId: "2",
        createdAt: today,
      },
    ];
  };
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "John",
      createdAt: new Date().toISOString(),
    };
  };
  export const deleteComment = async () => {
    return {};
  };
  export const updateComment = async (text) => {
    return { text };
  };  