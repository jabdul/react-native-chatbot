export default [
  {
    key: 'id',
    types: ['string', 'number'],
    required: true,
  },
  {
    key: 'radios',
    types: ['object'],
    required: true,
  },
  {
    key: 'label',
    types: 'string',
    required: true,
  },
  {
    key: 'end',
    types: ['boolean'],
    required: false,
  },
  {
    key: 'inputAttributes',
    types: ['object'],
    required: false,
  },
  {
    key: 'metadata',
    types: ['object'],
    required: false,
  },
];
