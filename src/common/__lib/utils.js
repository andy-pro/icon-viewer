import slugify from 'slugify';

/* =============  Immutability helpers  ================== */

export const pushItem = (list, item) => list.concat(item);

export const unshiftItem = (list, item) => [item].concat(list);

export const updateItemById = (list, id, set) =>
  list.map(item => (item.id === id ? Object.assign(item, set) : item));

export const deleteItemById = (list, id) => list.filter(item => item.id !== id);

export const deleteItemsByIds = (list, ids) => {
  if (!ids instanceof Array) ids = [ids];
  ids = ids.slice(0);
  return list.filter(item => {
    for (let i = 0, len = ids.length; i < len; i++) {
      if (item.id === ids[i]) {
        ids.splice(i, 1);
        return false;
      }
    }
    return true;
  });
};
/* =============  end of Immutability helpers  ================== */

export const firstToUpper = str =>
  str.substr(0, 1).toUpperCase() + str.substr(1);

export const convToArray = obj => (Array.isArray(obj) ? obj : [obj]);

export const compose = (...fns) => data => {
  /*  Performs right-to-left function composition.
    All functions must be unary. */
  for (let i = 0, len = fns.length; i < len; i++) {
    data = fns[len - i - 1](data);
  }
  return data;
};

export const pick = (obj, props) =>
  props.reduce((o, k) => {
    o[k] = obj[k];
    return o;
  }, {});

export const omit = (obj, props) =>
  Object.keys(obj).reduce((o, k) => {
    if (!props.includes(k)) o[k] = obj[k];
    return o;
  }, {});

export const fmtCost = cost =>
  Number(cost || 0).toFixed(2).replace(/[.,]00$/, '');

export const getValue = v => (typeof v === 'object' ? v.target.value : v);

export const testColor = v =>
  /^[0-9,a-f]{3}$/.test(v) || /^[0-9,a-f]{6}$/.test(v);

export const splitOnce = (str, dt, last = false) => {
  let pos = last ? str.lastIndexOf(dt) : str.indexOf(dt);
  return pos >= 0 ? [str.substr(0, pos), str.substr(pos + dt.length)] : [str];
};

// eslint-disable-next-line
const specialCharsRegex = /[\/|\&\?<>]/g;

const removeSpecial = s => s.trim().replace(specialCharsRegex, '');

const getSlug = s => slugify(removeSpecial(s));

export { removeSpecial, getSlug };

export const splitCategory = category =>
  category.split('/').map(c => removeSpecial(c));

export const slugifyCategory = category =>
  category.split('/').map(c => getSlug(c)).filter(c => Boolean(c)).join('/');

export const findDuplicate = (list, name) => {
  name = name.toLowerCase();
  return list ? list.find(item => item.name.toLowerCase() === name) : false;
};

export const getNameById = (list, id) => {
  let c = list.find(item => item.id === id);
  return c ? c.name : 'No category';
};

export const cmdUpdateLocal = (list, { cmd, payload }) => {
  let { data, id } = payload;
  // console.log('utils', cmd, payload);
  switch (cmd) {
    case 'add':
      return pushItem(list, data);

    case 'edit':
      return updateItemById(list, id, data);

    case 'remove':
      return deleteItemById(list, payload);

    default:
      return list;
  }
};
