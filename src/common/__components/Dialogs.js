import { Alert } from './';
 
/* =============  Dialog helpers  ================== */

export const deleteConfirm = (entry, cb) => {
  Alert.alert(
    `Delete entry "${entry}"`,
    'Are you shure?',
    [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: cb},
    ],
    { cancelable: false }
  )
}