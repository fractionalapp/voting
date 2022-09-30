import { Box } from '@/components/Box'
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Text } from '@/components/Text';
import { useRouter } from 'next/router';
import { useQuery } from "@apollo/client";
import { ProjectQuery } from './queries';

const UserPage = () => {
  const router = useRouter();
  const { data, loading, error } = useQuery(ProjectQuery, {
    variables: {
      id: 1,
    }
  });

  return (
    <Box backgroundColor="gray5" minHeight="viewHeight" display="flex" justifyContent="center" alignItems="center">
      <Card width="68">
        <Box display="flex" flexDirection="column">
          <Text>Welcome user {router.query.id} {data?.project?.canEdit ? '(edit)' : null}</Text>
          <Text size="small" color="gray">You can start here</Text>
          <Box display="flex" justifyContent="flex-end" gap="1">
            <Button size="small" variant="transparent">Cancel</Button>
            <Button size="small">Save</Button>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}

export default UserPage;