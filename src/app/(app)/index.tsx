// import { FlashList } from '@shopify/flash-list';
// import React from 'react';

import { Text, View } from '@/ui';
import { FocusAwareStatusBar } from '@/ui';

// import { Card } from '@/components/card';
// import { EmptyList, FocusAwareStatusBar, Text, View } from '@/ui';

// export default function Feed() {
//   const { data, isLoading, isError } = usePosts();
//   const renderItem = React.useCallback(
//     ({ item }: { item: Post }) => <Card {...item} />,
//     []
//   );
//   if (isError) {
//     return (
//       <View>
//         <Text> Error Loading data </Text>
//       </View>
//     );
//   }
//   return (
//     <View className="flex-1 ">
//       <FocusAwareStatusBar />
//       <FlashList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(_, index) => `item-${index}`}
//         ListEmptyComponent={<EmptyList isLoading={isLoading} />}
//         estimatedItemSize={300}
//       />
//     </View>
//   );
// }

export default function Feed() {
  return (
    <>
      <View className="flex-1 ">
        <FocusAwareStatusBar />
        <View className="flex flex-row items-center justify-center gap-4">
          <Text className="text-purple-800">hi</Text>
          <Text>bye</Text>
        </View>
      </View>
    </>
  );
}
