import React from 'react';

import { View } from './fela';

class ListView extends React.Component {
  static DataSource = function(methods) {
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
      _rowHasChanged: methods.rowHasChanged,
      _getRowData: methods.getRowData,
      _sectionHeaderHasChanged: methods.sectionHeaderHasChanged,
      _getSectionHeaderData: methods.getSectionHeaderData,
    };

    this.cloneWithRows = _dataBlob => ({
      _dataBlob,
      ...props,
    });

    this.cloneWithRowsAndSections = (
      _dataBlob,
      sectionIdentities,
      rowIdentities
    ) => ({
      _dataBlob,
      sectionIdentities,
      rowIdentities,
      ...props,
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

    return sectionIdentities
      ? <View style={contentContainerStyle}>
          {sectionIdentities.map((sid, index) => {
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
          })}
        </View>
      : <View style={contentContainerStyle}>
          {_dataBlob.map((item, index) => {
            return (
              <div key={item.id || index}>
                {renderRow(item, index, index)}
              </div>
            );
          })}
        </View>;
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
