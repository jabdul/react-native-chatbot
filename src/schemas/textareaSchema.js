export default [
  {
    key: 'id',
    types: ['string', 'number'],
    required: true,
  },
  {
    key: 'textarea',
    types: ['boolean'],
    required: true,
  },
  {
    key: 'trigger',
    types: ['string'],
    required: true,
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
