export const usePackages = () => {
  const packages = [
    {
      id: 1,
      title: 'Pre-Wedding',
      price: '$299',
      image: '/images/package1.jpg'
    },
    {
      id: 2,
      title: 'Wedding Day',
      price: '$499',
      image: '/images/package2.jpg'
    }
  ]

  return { packages }
}
