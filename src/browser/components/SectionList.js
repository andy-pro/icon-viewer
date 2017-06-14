import React from 'react';

export default ({
  style,
  sections,
  renderSectionHeader,
  renderItem,
  keyExtractor = d => d.key,
}) =>
  <div>
    {sections.map((section, i) =>
      <div key={keyExtractor(section, i)}>
        {renderSectionHeader({ section })}
        {section.data.map((item, j) =>
          <div key={keyExtractor(item, j)}>
            {renderItem({ item, index: j })}
          </div>
        )}
      </div>
    )}
  </div>;

/*

  <SectionList
    sections={sections}
    renderSectionHeader={renderSectionHeader}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />

*/
