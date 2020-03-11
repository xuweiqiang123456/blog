import { getComments } from "../api/api";

const GETCOMMENT = "GETCOMMENT";
const CLEARCOMMENT = "CLEARCOMMENT";
const initState = {
  page: 0,
  count: 0,
  list: [
    {
      children: [
        {
          _id: 1,
          id: 1,
          content: "楼主说的对",
          userinfo: { user: "用户名1", weburl: "http://www.baidu.com", _id: 1 }
        }
      ],
      _id: 1,
      id: 1,
      content: "1楼留言",
      userinfo: { user: "666", weburl: "http://www.baidu.com", _id: 1 }
    },
    {
      children: [
        {
          _id: 1,
          id: 1,
          content: "2楼主说的对",
          userinfo: { user: "888", weburl: "http://www.baidu.com", _id: 1 }
        }
      ],
      _id: 1,
      id: 1,
      content: "2楼留言",
      userinfo: { user: "666", weburl: "http://www.baidu.com", _id: 1 }
    }
  ]
};
export function comment(state = initState, action) {
  switch (action.type) {
    case GETCOMMENT:
      const { page } = action.payload;
      const list = page === 0 ? [] : state.list;
      const { list: newlist, ...others } = action.payload;
      return { ...state, ...others, list: list.concat(newlist || []) };
    case CLEARCOMMENT:
      return initState;
    default:
      return state;
  }
}
// 获取留言列表
export function getlist({ page = 0, size }) {
  return async dispatch => {
    const { list, count } = await getComments({ page, size });
    dispatch({
      type: GETCOMMENT,
      payload: {
        list,
        count,
        page
      }
    });
  };
}
// 初始化留言
export function clearlist() {
  return async dispatch => {
    dispatch({
      type: CLEARCOMMENT
    });
  };
}
