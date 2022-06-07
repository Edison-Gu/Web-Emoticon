import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const DashboardSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path
      d="M109.714286 512a73.142857 73.142857 0 0 0 73.142857 73.142857h219.428571a73.142857 73.142857 0 0 0 73.142857-73.142857V219.428571a73.142857 73.142857 0 0 0-73.142857-73.142857h-219.428571a73.142857 73.142857 0 0 0-73.142857 73.142857v292.571429z m0 292.571429a73.142857 73.142857 0 0 0 73.142857 73.142857h219.428571a73.142857 73.142857 0 0 0 73.142857-73.142857v-73.142858a73.142857 73.142857 0 0 0-73.142857-73.142857h-219.428571a73.142857 73.142857 0 0 0-73.142857 73.142857v73.142858z m438.857143 0a73.142857 73.142857 0 0 0 73.142857 73.142857h219.428571a73.142857 73.142857 0 0 0 73.142857-73.142857V585.142857a73.142857 73.142857 0 0 0-73.142857-73.142857h-219.428571a73.142857 73.142857 0 0 0-73.142857 73.142857v219.428572z m73.142857-658.285715a73.142857 73.142857 0 0 0-73.142857 73.142857v146.285715a73.142857 73.142857 0 0 0 73.142857 73.142857h219.428571a73.142857 73.142857 0 0 0 73.142857-73.142857V219.428571a73.142857 73.142857 0 0 0-73.142857-73.142857h-219.428571z">
    </path>
  </svg>
)

const DashboardIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={DashboardSvg} {...props} />
)

export default DashboardIcon