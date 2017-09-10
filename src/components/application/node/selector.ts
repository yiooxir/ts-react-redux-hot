import { createSelector } from 'reselect'

const dndSelector = state => state.dnd

const selector = createSelector(
  dndSelector,
  (dnd) => dnd
)

export {
  selector
}
