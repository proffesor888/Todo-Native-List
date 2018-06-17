import React from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';

const GoalList = (props) => {
		const {goals} = props;
		return (
			<View style={styles.container}>
			<FlatList 
				data={goals}
				renderItem={({item}) => <Text>{item.value}</Text>}
				style={styles.list}
			/>
			</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	}
	list: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	}
})

export default GoalList;