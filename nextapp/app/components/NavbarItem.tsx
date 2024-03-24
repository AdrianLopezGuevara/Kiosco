import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
type Category = {
    id: number;
    name: string;
    slug: string;
};
const NavbarItem = (category: Category) => {
    return (
        <ListItem key={category.id} disablePadding>
            <ListItemButton href={`/order/${category.name}`}>
                <div className='flex justify-center gap-4'>
                    <Image
                        src={`/icon_${category.slug}.svg`}
                        alt={category.name}
                        width={100}
                        height={100}
                    />
                    <Typography variant="h6" noWrap component="div">
                        {category.name}
                    </Typography>
                </div>
            </ListItemButton>
        </ListItem>
    );
}

export default NavbarItem;