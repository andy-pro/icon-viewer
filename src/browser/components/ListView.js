import React from 'react';

import { View } from './fela';

class ListView extends React.Component {
  static DataSource = function({
    rowHasChanged,
    sectionHeaderHasChanged,
    getSectionHeaderData,
    getRowData,
  }) {
    // rowHasChanged(prevRowData, nextRowData);
    // sectionHeaderHasChanged(prevSectionData, nextSectionData);
    // getSectionHeaderData(dataBlob, sectionID);
    // getRowData(dataBlob, sectionID, rowID);

    // methods example:
    // rowHasChanged: (r1, r2) => r1 !== r2,
    // sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
    // getSectionHeaderData: (dataBlob, sectionId) => dataBlob[sectionId],
    // getRowData: (dataBlob, sectionId, rowId) => dataBlob[rowId]

    const props = {
      _rowHasChanged: rowHasChanged,
      _sectionHeaderHasChanged: sectionHeaderHasChanged,
      _getSectionHeaderData: getSectionHeaderData,
      _getRowData: getRowData,
    };

    this.cloneWithRows = (_dataBlob, rowIdentities) => ({
      ...props,
      _dataBlob,
      rowIdentities,
      cloneWithRows: this.cloneWithRows,
    });

    this.cloneWithRowsAndSections = (
      _dataBlob,
      sectionIdentities,
      rowIdentities
    ) => ({
      ...props,
      _dataBlob,
      sectionIdentities,
      rowIdentities,
      cloneWithRowsAndSections: this.cloneWithRowsAndSections,
    });

    /*
    _dirtyRows, [[true, true, true ...]
    _dirtySections, [true, true, ...]
    _cachedRowCount,
    rowIdentities,
    sectionIdentities
    */
  };

  render() {
    const {
      contentContainerStyle,
      dataSource,
      renderSectionHeader,
      renderRow,
      enableEmptySections,
    } = this.props;

    let {
      _dataBlob,
      sectionIdentities,
      rowIdentities,
      _getRowData,
      _getSectionHeaderData,
    } = dataSource;

    return (
      <View style={contentContainerStyle}>
        {sectionIdentities
          ? sectionIdentities.map((sid, index) => {
              let sectionData = _getSectionHeaderData(_dataBlob, sid);
              let rows = rowIdentities[index];
              return enableEmptySections || rows.length
                ? <div key={sid}>
                    {renderSectionHeader(sectionData, sid)}
                    {rows.map(rid => {
                      let rowData = _getRowData(_dataBlob, sid, rid);
                      return (
                        <div key={rid}>
                          {renderRow(rowData, sid, rid)}
                        </div>
                      );
                    })}
                  </div>
                : null;
            })
          : rowIdentities
            ? rowIdentities.map(id => {
                return (
                  <div key={id}>
                    {renderRow(_dataBlob[id], null, id)}
                  </div>
                );
              })
            : _dataBlob.map((item, index) => {
                return (
                  <div key={item.id || index}>
                    {renderRow(item, null, index)}
                  </div>
                );
              })}
      </View>
    );
  }
}

export default ListView;

/*

  <ListView
    contentContainerStyle={styles.wrapper}
    dataSource={ds.cloneWithRows(data)}
    renderRow={renderRow}
    renderSectionHeader={renderSectionHeader}
    enableEmptySections
    initialListSize={Infinity}
  />

*/
