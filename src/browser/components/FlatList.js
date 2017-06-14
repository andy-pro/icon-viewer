import React from 'react';

export default ({
  columnWrapperStyle,
  data,
  renderItem,
  keyExtractor = d => d.key,
}) =>
  <div style={columnWrapperStyle}>
    {data.map((item, j) =>
      <div key={keyExtractor(item, j)}>
        {renderItem({ item, index: j })}
      </div>
    )}
  </div>;

/*

<FlatList
  data={[{key: 'a'}, {key: 'b'}]}
  renderItem={({item}) => <Text>{item.key}</Text>}
/>

*/
