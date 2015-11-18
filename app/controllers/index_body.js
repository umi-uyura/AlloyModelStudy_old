'use strict';

Alloy.Collections.ad_address.fetch();

function transformAddress(model) {
  var transform = model.toJSON();

  transform.listitem = '';
  if ('NULL' !== transform.city_name) {
    transform.listitem = transform.listitem + transform.city_name;
  }
  if ('NULL' !== transform.town_name) {
    transform.listitem = transform.listitem + transform.town_name;
  }
  if ('NULL' !== transform.block_name) {
    transform.listitem = transform.listitem + transform.block_name;
  }
  if ('NULL' !== transform.office_name) {
    transform.listitem = transform.listitem + ' ' + transform.office_name;
  }

  return transform;
}
