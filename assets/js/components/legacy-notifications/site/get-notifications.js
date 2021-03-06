/**
 * Internal dependencies
 */
import data, { TYPE_CORE } from '../../data';

/**
 * Gets core site notifications.
 *
 * Leverages data cache.
 *
 * @since 1.0.0
 *
 * @return {Array} List of notification objects.
 */
export default async function getNotifications() {
	return await data.get( TYPE_CORE, 'site', 'notifications', {}, false );
}
