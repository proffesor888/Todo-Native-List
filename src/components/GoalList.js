import React from 'react';
import { 
	Text,
	FlatList,
	View,
	StyleSheet,
	TouchableOpacity,
	Modal,
	Button 
	} from 'react-native';

const GoalList = (props) => {
		const {goals, selectGoal, modal, closeModal, selected} = props;
		console.warn(modal)
		return (
			<View style={styles.container}>
			<FlatList 
				data={goals}
				renderItem={({item}) => <TouchableOpacity onPress={()=> selectGoal(item.key)}><Text>{item.value}</Text></TouchableOpacity>}
				style={styles.list}
			/>
			<Modal 
				visible={modal}
				animationType='slide'
				onRequestClose={closeModal}>
				<View style={styles.modalContainer}>
					<Text>{selected.value}</Text>
					<Button title='close' onPress={closeModal}/>
				</View>
			</Modal>
			</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: 'flex-start',
		marginLeft: 40
	},
	modalContainer: {
		flex: 1,
		flexDirection: 'column',
		marginTop: 50,
		//justifyContent: 'center',
		alignItems: 'center'
	}
})

export default GoalList;